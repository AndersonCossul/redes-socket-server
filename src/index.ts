import { Server } from "socket.io";
import FileService from "./services/FileService";
var fs = require("fs");

const io = new Server();

io.on("connection", (socket) => {
  socket.on("get-files", (payload, callback) => {
    const files = FileService.getAll();
    callback(files);
  });

  socket.on("download-file", (payload, callback) => {
    if (payload && payload.id) {
      const file = FileService.getFile(payload.id);

      if (!file) {
        return callback({
          error: "FILE_NOT_FOUND",
        });
      }

      fs.readFile(
        `${file.path}.${file.extension}`,
        function (error: any, data: any) {
          if (error) {
            return callback({
              error,
            });
          }

          return callback({
            file,
            data,
          });
        }
      );
    } else {
      callback({
        error: "MISSING_FILE_ID",
      });
    }
  });
});

io.listen(4000);
