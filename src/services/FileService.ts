import path from "path";
import FileModel from "../models/FileModel";

const files = [
  {
    id: 1,
    name: "PDF",
    path: path.join(__dirname, "/files/dummy"),
    extension: "pdf",
  },
  {
    id: 2,
    name: "MP3",
    path: path.join(__dirname, "/files/file_example_MP3_5MG"),
    extension: "mp3",
  },
  {
    id: 3,
    name: "JPG",
    path: path.join(__dirname, "/files/wallpaperflare.com_wallpaper"),
    extension: "jpg",
  },
] as Array<FileModel>;

const getAll = () => {
  return files;
};

const getFile = (id: number) => {
  return files.find((x) => x.id === id);
};

export default {
  getAll,
  getFile,
};
