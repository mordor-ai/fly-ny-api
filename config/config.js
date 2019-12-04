/*global exports, __dirname,require,process*/
var path = require('path');
exports.uploadDir = path.join(__dirname, '../uploads/');
exports.avatarDir = path.join(__dirname, '../avatars/');
exports.siftDir = path.join(__dirname, '../sift/');
//exports.mobvinoDbDir = process.env.MOBVINO_DB_DIR || '/var/lib/mobvino/';
exports.logDir = path.join(__dirname, '../logs/');//process.env.MOBVINO_LOG_DIR || '/var/log/mobvino-api';
exports.logFile = 'fly-ny-api.log';
exports.mobvinoExecDir = '/usr/local/bin/';
//__dirname

exports.username = 'mjdmjscjomze';
exports.password = 'xs;ùkkzfzezekm678979799';
exports.listenPort = '3010';
exports.listenPortHttp = '92';
exports.listenPortUpload = '3011';
exports.listenPortUploadHttp = '91';
exports.mobvino_search_image = path.join(exports.mobvinoExecDir, 'mv_image_search_local');
exports.mobvino_image_db = 'mobvino_all_wines';
exports.mobvino_full_image_db = path.join(exports.mobvinoDbDir, exports.mobvino_image_db + '.mvdb');
exports.mobvino_compute_descriptors = path.join(exports.mobvinoExecDir, 'mobvino_compute_descriptors');
exports.mobvino_build_database = path.join(exports.mobvinoExecDir, 'mobvino_build_database');
exports.mobvino_addto_database = path.join(exports.mobvinoExecDir, 'mobvino_addto_database');
exports.mobvino_view_descriptors = path.join(exports.mobvinoExecDir, 'mobvino_view_descriptors');
exports.mobvino_dump_database = path.join(exports.mobvinoExecDir, 'mobvino_dump_database');
exports.sio = null;