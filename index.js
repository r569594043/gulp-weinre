'use strict';

// --httpPort     port to run the http server on        default: #{optionDefaults.httpPort}
// --boundHost    ip address to bind the server to      default: #{optionDefaults.boundHost}
// --verbose      print more diagnostics                default: #{optionDefaults.verbose}
// --debug        print even more diagnostics           default: #{optionDefaults.debug}
// --readTimeout  seconds to wait for a client message  default: #{optionDefaults.readTimeout}
// --deathTimeout seconds to wait to kill client        default: 3*readTimeout

/*
#-------------------------------------------------------------------------------
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#-------------------------------------------------------------------------------
*/

// script to run the weinre server

var path = require('path');
var fs   = require('fs');

var rootPath = path.dirname(fs.realpathSync(__filename));
// var weinreRootPath = rootPath + '/node_modules/weinre';

// var nodeModules = path.join(weinreRootPath, 'node_modules');

require('coffee-script/register');

module.exports = function(options){
    require(path.join(rootPath, '/cli')).run(options);
};
