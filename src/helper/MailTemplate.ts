export const normalMailBody = (content: string) => `
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody>
      <tr>
        <td align="left" valign="top">
          <table
            align="left"
            bgcolor="#FFFFFF"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="width: 650px"
            width="650"
          >
            <tbody>
              <tr>
                <td align="center" style="padding: 0px 25px" valign="top">
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="
                            font-family: 'inter', helvetica, sans-serif;
                            font-size: 14px;
                            line-height: 20px;
                            color: #000000;
                            font-weight: 400;
                          "
                          valign="top"
                        >
                          Hello Admin, <br />
                          ${content}
                          <br /><br />
                          Thank You.
                        </td>
                      </tr>

                    


                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      
    </tbody>
  </table>
  `;
