package com.ujcms.cms.core.web.frontend;

import com.ujcms.util.file.FileHandler;
import com.ujcms.util.web.PathResolver;
import com.ujcms.util.web.Servlets;
import com.ujcms.util.web.exception.Http403Exception;
import com.ujcms.util.web.exception.Http404Exception;
import com.ujcms.cms.core.support.Props;
import com.ujcms.cms.core.support.UrlConstants;
import com.ujcms.cms.core.support.Utils;
import com.ujcms.cms.core.domain.Article;
import com.ujcms.cms.core.domain.ArticleBuffer;
import com.ujcms.cms.core.domain.ArticleFile;
import com.ujcms.cms.core.domain.Site;
import com.ujcms.cms.core.service.ArticleBufferService;
import com.ujcms.cms.core.service.ArticleService;
import com.ujcms.cms.core.support.Constants;
import com.ujcms.cms.core.web.support.SiteResolver;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static com.ujcms.cms.core.support.Frontends.PAGE;
import static com.ujcms.cms.core.support.Frontends.PAGE_URL_RESOLVER;

/**
 * 前台文章 Controller
 *
 * @author PONY
 */
@Controller("frontendArticleController")
public class ArticleController {
    private ArticleBufferService bufferService;
    private ArticleService articleService;
    private SiteResolver siteResolver;
    private PathResolver pathResolver;
    private Props props;

    public ArticleController(ArticleBufferService bufferService, ArticleService articleService,
                             SiteResolver siteResolver, PathResolver pathResolver, Props props) {
        this.bufferService = bufferService;
        this.articleService = articleService;
        this.siteResolver = siteResolver;
        this.pathResolver = pathResolver;
        this.props = props;
    }

    @GetMapping({UrlConstants.ARTICLE + "/{id}", UrlConstants.ARTICLE + "/{id}/{page:[\\d]+}",
            UrlConstants.ARTICLE + "/{id}/{alias:[\\w-]+}", UrlConstants.ARTICLE + "/{id}/{alias:[\\w-]+}/{page:[\\d]+}",
            "/{subDir:[\\w-]+}" + UrlConstants.ARTICLE + "/{id}", "/{subDir:[\\w-]+}" + UrlConstants.ARTICLE + "/{id}_{page:[\\d]+}",
            "/{subDir:[\\w-]+}" + UrlConstants.ARTICLE + "/{id}/{alias:[\\w-]+}",
            "/{subDir:[\\w-]+}" + UrlConstants.ARTICLE + "/{id}/{alias:[\\w-]+}/{page:[\\d]+}"})
    public String article(@PathVariable Integer id, @PathVariable(required = false) String subDir,
                          @PathVariable(required = false) String alias, @PathVariable(required = false) Integer page,
                          HttpServletRequest request, Map<String, Object> modelMap) {
        Site site = siteResolver.resolve(request, subDir);
        Article article = validateArticle(id, site);
        if (!StringUtils.equals(article.getExt().getAlias(), alias)) {
            return "redirect:" + article.getUrl();
        }
        modelMap.put("article", article);
        modelMap.put("channel", article.getChannel());
        modelMap.put(PAGE, Constants.validPage(page));
        modelMap.put(PAGE_URL_RESOLVER, article);
        return article.getTemplate();
    }

    @GetMapping({"/download/{id:[\\d]+}", "/download/{id:[\\d]+}/{index:[\\d]+}",
            "/{subDir:[\\w-]+}/download/{id:[\\d]+}", "/{subDir:[\\w-]+}/download/{id:[\\d]+}/{index:[\\d]+}"})
    public void download(@PathVariable Integer id, @PathVariable(required = false) Integer index,
                         @PathVariable(required = false) String subDir,
                         @RequestParam long time, @NotNull String key,
                         HttpServletRequest request, HttpServletResponse response) throws IOException {
        Site site = siteResolver.resolve(request, subDir);
        if (!Utils.validateDownloadKey(key, id, time, props.getDownloadSecret())) {
            throw new Http403Exception("Download Key Invalid");
        }
        int expires = 24 * 60 * 60 * 1000;
        if (System.currentTimeMillis() - time > expires) {
            throw new Http403Exception("Download Key Expired");
        }
        Article article = validateArticle(id, site);
        String fileUrl, fileName;
        if (index != null) {
            List<ArticleFile> fileList = article.getFileList();
            if (index >= fileList.size()) {
                throw new Http404Exception("Article file not found. id=" + id + ", index=" + index);
            }
            ArticleFile articleFile = fileList.get(index);
            fileUrl = articleFile.getUrl();
            fileName = articleFile.getName();
        } else {
            fileUrl = article.getFile();
            fileName = article.getFileName();
        }
        if (StringUtils.isBlank(fileUrl)) {
            throw new Http404Exception("Article file not exist. id=" + id);
        }
        ArticleBuffer buffer = article.getBuffer();
        int downloads = buffer.getDownloads() + 1;
        buffer.setDownloads(downloads);
        bufferService.update(buffer);
        FileHandler fileHandler = site.getConfig().getUploadStorage().getFileHandler(pathResolver);
        String filename = fileHandler.getName(fileUrl);
        // 不属于当前存储点（外部文件或上传文件后修改了储存点），直接重定向至文件
        if (filename == null) {
            response.sendRedirect(fileUrl);
            return;
        }
        try (InputStream input = fileHandler.getInputStream(filename)) {
            if (input == null) {
                throw new Http404Exception("Article file not found: " + fileUrl);
            }
            Servlets.setAttachmentHeader(response, request,
                    Optional.ofNullable(fileName).filter(StringUtils::isNotBlank)
                            .orElseGet(() -> FilenameUtils.getName(fileUrl)));
            try (OutputStream output = response.getOutputStream()) {
                IOUtils.copy(input, output);
                output.flush();
            }
        }
    }

    private Article validateArticle(Integer id, Site site) {
        Article article = articleService.select(id);
        if (article == null) {
            throw new Http404Exception("Article not found. id=" + id);
        }
        if (!site.getId().equals(article.getSiteId())) {
            throw new Http404Exception("error.notInSite",
                    String.valueOf(article.getSiteId()), String.valueOf(site.getId()));
        }
        return article;
    }
}
