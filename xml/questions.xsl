<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
  <style>
    table{    border-style: solid;
    border-color: #0000ff;}
  </style>
 <body>
  <h2>Preguntas</h2>
  <table border="1">
   <tr bgcolor="#cdd8f6">
    <th>Titulo de la pregunta</th>
    <th>Optiones a elegir</th>
    <th>Respuesta correcta</th>
   </tr>
   <xsl:for-each select="questions/question">
   <tr>
    <td>
      <b><xsl:value-of select="title"/></b>
    </td>
   <td bgcolor="#FFFFE1">
    <xsl:for-each select="option">
    <xsl:value-of select="position()"/>)
    <xsl:value-of select="text()"/><br/>
    </xsl:for-each>
   </td>
   <td bgcolor="#A1FCB9">
    <xsl:for-each select="answer">
    <xsl:value-of select="text()"/>
    <br/>
    </xsl:for-each>
   </td>
   </tr>
   </xsl:for-each>
  </table>
 </body>
</html>
</xsl:template>

</xsl:stylesheet>

