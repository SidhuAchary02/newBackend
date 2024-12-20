import { v2 as cloudinary } from 'cloudinary';
import fs from fs

// Configuration
cloudinary.config({ 
cloud_name: process.env.CLOUDINARY_NAME, 
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET_KEY // Click 'View API Keys' above to copy your API secret
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        // upload file is not there
        if (!localFilePath) return null

        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })

        // file has uploaded on cloudinary successful !
        console.log("file is uploaded successfully",response.url)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}


export {uploadOnCloudinary}