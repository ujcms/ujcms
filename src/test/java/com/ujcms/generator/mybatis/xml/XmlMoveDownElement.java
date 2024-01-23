package com.ujcms.generator.mybatis.xml;

import org.mybatis.generator.api.dom.xml.Attribute;
import org.mybatis.generator.api.dom.xml.TextElement;
import org.mybatis.generator.api.dom.xml.XmlElement;
import org.mybatis.generator.codegen.mybatis3.xmlmapper.elements.AbstractXmlElementGenerator;

public class XmlMoveDownElement extends AbstractXmlElementGenerator {
    @Override
    public void addElements(XmlElement parentElement) {
        XmlElement answer = new XmlElement("update");

        answer.addAttribute(new Attribute("id", "moveDown"));

        StringBuilder sb = new StringBuilder();
        sb.append("update ");
        sb.append(introspectedTable.getFullyQualifiedTableNameAtRuntime());
        answer.addElement(new TextElement(sb.toString()));

        sb.setLength(0);
        sb.append("set order_ = order_ - 1");
        answer.addElement(new TextElement(sb.toString()));

        sb.setLength(0);
        sb.append("where order_ &gt; #{from} and order_ &lt;= #{to}");
        answer.addElement(new TextElement(sb.toString()));

        parentElement.addElement(answer);
    }
}