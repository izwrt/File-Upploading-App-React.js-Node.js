import axios from 'axios';
import React, {useState} from 'react';

const statuses = {
    IDLE: 'idle',
    UPLOADING: 'uploading',
    COMPLETED: 'completed',
    FAILED: 'failed'
  };

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState(statuses.IDLE); 

    function fileHandle(e) {
        e.preventDefault();
        setFile(e.target.files[0])
    }

    async function HandleFileupload() {
        if(!file) return;
        setStatus(statuses.UPLOADING);

        const formData = new FormData();
        formData.append('file',file);

        try {
            await axios.post("https:")
        } catch {};
    }

     console.log(file)

    return(
        <div className="text-xl space-y-10 p-10">
            Upload a file... here
            <input onChange={fileHandle} type='file'/>
            <br/>
            {file && (
                <div className='flex flex-col space-y-4 border border-red-300 p-10 w-[400px]'>
                    <span>
                        {file.name}
                    </span>
                    <span>
                        {(file.size / 1024).toFixed(2)} MB
                    </span>
                    <span>
                        {file.type}
                    </span>
                    {file && status !== 'uploading' && <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-[200px]">Upload</button>}
                </div>
            )}
           
        </div>
    )
}

export default UploadFile;