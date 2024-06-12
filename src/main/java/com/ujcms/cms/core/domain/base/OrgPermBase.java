package com.ujcms.cms.core.domain.base;

import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import javax.validation.constraints.NotNull;

/**
 * This class was generated by MyBatis Generator.
 *
 * @author MyBatis Generator
 */
public class OrgPermBase implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 数据库表名
     */
    public static final String TABLE_NAME = "org_perm";

    /**
     * 组织ID
     */
    @NotNull
    @Schema(description="组织ID")
    private Long orgId = 0L;

    /**
     * 权限组织ID
     */
    @NotNull
    @Schema(description="权限组织ID")
    private Long permOrgId = 0L;

    public Long getOrgId() {
        return orgId;
    }

    public void setOrgId(Long orgId) {
        this.orgId = orgId;
    }

    public Long getPermOrgId() {
        return permOrgId;
    }

    public void setPermOrgId(Long permOrgId) {
        this.permOrgId = permOrgId;
    }
}