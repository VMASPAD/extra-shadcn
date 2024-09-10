"use client"
import React, { useEffect, useState, useRef } from 'react'
import AceEditor from "react-ace";

// Importa los temas y modos que vas a usar
import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/theme-tomorrow";

// Si deseas autocompletado o resaltado
import "ace-builds/src-noconflict/ext-language_tools";

import "../theme/theme"

interface CodeProps {
    styles: boolean
    newCode: string
}

function Code({styles, newCode}: CodeProps) {
    const [code, setCode] = useState<string>(newCode);
    const editorRef = useRef<AceEditor>(null);

    useEffect(() => {
        // Actualiza el estado con newCode cuando cambie
        setCode(newCode); 

        // Forzar la actualización del editor
        if (editorRef.current && editorRef.current.editor) {
            editorRef.current.editor.setValue(newCode);
        }
    }, [newCode]);

    const mainTheme = styles ? "theme" : "tomorrow";

    const handleChange = (value: string) => {
        setCode(value); 
    };

    return (
        <AceEditor
            ref={editorRef}
            readOnly={true} // No permite editar el contenido
            mode="tsx" // Lenguaje del editor
            theme={mainTheme}  // Tema visual
            name="editor"     // Nombre único del editor
            onChange={handleChange} // Función que se ejecuta al cambiar el contenido
            value={code} // Usa el estado 'code' como valor
            fontSize={14}     // Tamaño de la fuente 
            width='100%'      // Ancho del editor
            height='300px'    // Altura del editor
            showGutter={false} // Muestra la barra lateral
            showPrintMargin={true} // Muestra el margen de impresión 
            highlightActiveLine={true} // Resalta la línea activa
            className="rounded-lg shadow-lg border border-gray-300"
            setOptions={{
                fontFamily: "GeistMono", // Fuente del editor
                enableBasicAutocompletion: true, // Activar autocompletado básico
                enableLiveAutocompletion: true, // Activar autocompletado en vivo
                enableSnippets: true, // Activar fragmentos de código 
                showLineNumbers: false, // Muestra los números de línea
            }}
        />
    )
}

export default Code