const File = require("../models/file");
const cloudinary = require("cloudinary").v2;

// !local file upload handler
exports.localFileUpload = async (req, res) => {
  try {
    // fetch file from request
    const file = req.files.file;
    console.log(file);
    // create path where file need to be stored on server
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log(path);
    // add path to the move function
    file.mv(path, (err) => {
      console.log(err);
    });
    // create a successful response
    res.json({
      success: true,
      message: "Local File Uploaded Successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  options.resource_type = "auto";
  if (quality) {
    options.quality = quality;
  }
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// !image upload handler
exports.imageUpload = async (req, res) => {
  try {
    // data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    // file fetch
    const file = req.files.imageFile;
    console.log(file);

    // validation
    const supportedTypes = ["jpg", "jpeg", "png", "webp"];
    const fileType = file.name.split(".")[1].toLowerCase();
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }
    // if file format supported
    const response = await uploadFileToCloudinary(file, "Kabir");
    console.log(response);

    // save entry on DB
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image successfully Uploaded",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// !video upload handler

exports.videoUpload = async (req, res) => {
  try {
    // data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);
    const file = req.files.videoFile;

    //  validation
    const supportedTypes = ["mp4", "mov", "mkv"];
    const fileType = file.name.split(".")[1].toLowerCase();
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }

    // if file format supported
    const response = await uploadFileToCloudinary(file, "Kabir");
    console.log(response);

    // save entry on DB
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Video successfully Uploaded",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// image file size  reducer

exports.imageSizeReducer = async (req, res) => {
  try {
    // data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    // file fetch
    const file = req.files.imageFile;
    console.log(file);

    // validation
    const supportedTypes = ["jpg", "jpeg", "png", "webp"];
    const fileType = file.name.split(".")[1].toLowerCase();
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }

    // if file format supported
    const response = await uploadFileToCloudinary(file, "Kabir", 30);
    console.log(response);

    // save entry on DB
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image successfully Uploaded",
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
