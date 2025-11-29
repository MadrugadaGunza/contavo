import React, { useState } from "react";

interface FileInputProps {
    label?: string;
    onFileSelect?: (file: File | null) => void;
}

const FileInput = ({ label = "Escolher ficheiro", onFileSelect }:FileInputProps) => {
    const [fileName, setFileName] = useState<string>("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] || null;
        setFileName(file ? file.name : "");
        onFileSelect?.(file);
    }

    return (
        <div className="block mb-6 w-full">
            <label className="block mb-1">{label}</label>

            <label className="flex items-center justify-between w-full p-3 border border-gray-300 cursor-pointer bg-white hover:bg-gray-50 transition">
                <span className="text-sm text-gray-600 truncate">{fileName || "Nenhum ficheiro selecionado"}</span>

                <span className="px-3 py-2 text-xs text-white bg-gray-800">Procurar</span>

                <input type="file" name="file" className="hidden" onChange={handleChange} />
            </label>
        </div>
    );
};

export default FileInput;
