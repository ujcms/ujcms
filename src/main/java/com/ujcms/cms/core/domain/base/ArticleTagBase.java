package com.ujcms.cms.core.domain.base;

import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import javax.validation.constraints.NotNull;
import org.springframework.lang.Nullable;

/**
 * This class was generated by MyBatis Generator.
 *
 * @author MyBatis Generator
 */
public class ArticleTagBase implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 数据库表名
     */
    public static final String TABLE_NAME = "article_tag";

    /**
     * 文章ID
     */
    @NotNull
    @Schema(description="文章ID")
    private Integer articleId = 0;

    /**
     * TagID
     */
    @NotNull
    @Schema(description="TagID")
    private Integer tagId = 0;

    /**
     * 排序
     */
    @Nullable
    @Schema(description="排序")
    private Short order;

    public Integer getArticleId() {
        return articleId;
    }

    public void setArticleId(Integer articleId) {
        this.articleId = articleId;
    }

    public Integer getTagId() {
        return tagId;
    }

    public void setTagId(Integer tagId) {
        this.tagId = tagId;
    }

    @Nullable
    public Short getOrder() {
        return order;
    }

    public void setOrder(@Nullable Short order) {
        this.order = order;
    }
}