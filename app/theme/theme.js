ace.define("ace/theme/theme", ["require", "exports", "module", "ace/lib/dom"], function(require, exports, module) {
    exports.isDark = false;  // Indica si es un tema oscuro o claro
    exports.cssClass = "ace-my-custom-theme";  // Clase CSS del tema
    exports.cssText = `
    .ace-my-custom-theme .ace_string {
        color: #FF5733;  /* Color para las rutas en las importaciones */
      }
      .ace-my-custom-theme .ace_gutter {
        background: #f0f0f0;
        color: #333;
      }
      .ace-my-custom-theme .ace_print-margin {
        width: 1px;
        background: #e8e8e8;
      }
      .ace-my-custom-theme {
        background-color: #ffffff;
        color: #6da1de;
      }
      .ace-my-custom-theme .ace_cursor {
        color: #000000;
      }
      .ace-my-custom-theme .ace_marker-layer .ace_selection {
        background: #d3d3d3;
      }
      .ace-my-custom-theme.ace_multiselect .ace_selection.ace_start {
        box-shadow: 0 0 3px 0px #ffffff;
      }
      .ace-my-custom-theme .ace_keyword {
        color: #eda4ab;
      }
      .ace-my-custom-theme .ace_comment {
        color: #b2b7bb ;
      }
      .ace-my-custom-theme .ace_string {
        color: #b2b7bb;
      }
      .ace-my-custom-theme .ace_variable {
        color: #660E7A;
      }
      .ace-my-custom-theme .ace_constant{
        color: #1C00CF;
      }

      .ace-my-custom-theme .ace_attribute-name {
        color: #005cc5;
      }

      .ace-my-custom-theme .ace_attribute-value {
        color: #0356ae;  /* Cambia el color del contenido de los atributos */
      }
      .ace-my-custom-theme .ace_tag {
        color: #004314;
      }
.ace-my-custom-theme .ace_string.ace_import-string {
  color: #FF5733;  /* Color para las rutas en las importaciones */
}

      
    `;
  
    var dom = require("ace/lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
  });
  