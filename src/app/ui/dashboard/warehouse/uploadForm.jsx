"use client";
import { uploadFile } from "@/app/lib/actions";
import { useRef } from "react";
import React from 'react';

export default function UploadForm() {
    const fileInput = useRef(null);

    return (
        <div className="border-gray-900 border-2" style={{borderRadius: 4, display: "flex", alignItems: "center"}}>
            <form action={uploadFile} className="flex flex-col gap-4">
                <label className="">
                    <span>Upload a CSV file </span>
                    <input type="file" name="file" accept="text/csv" ref={fileInput}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}