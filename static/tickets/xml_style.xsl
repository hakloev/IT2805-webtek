<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">

    <html>
        <body>
            <h1>Billetter til Gløseberg fornøyelsespark</h1>
            <table border="1">
                <tr bgcolor="#9acd32">
                    <th style="text-align:left">Bestiller</th>
                    <th style="text-align:left">Email</th>
                    <th style="text-align:left">Antall Billetter</th>
                    <th style="text-align:left">Total Pris</th>
                </tr>
                <xsl:for-each select="tickets/ticket">
                <tr>
                <td><xsl:value-of select="name"/></td>
                <td><xsl:value-of select="email"/></td>
                <td><xsl:value-of select="antallBilletter"/></td>
                    <td><xsl:value-of select="totalPris"/></td>
                </tr>
                </xsl:for-each>
</table>




        </body>

    </html>

    </xsl:template>

</xsl:stylesheet>