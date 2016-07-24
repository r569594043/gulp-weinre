# gulp-weinre

## Author
[Isken Huang](https://github.com/IskenHuang)

## options
| name | description | default |
| --- | --- | --- |
| httpPort     | port to run the http server on                | #{optionDefaults.httpPort} |
| boundHost    | can be an ip address, hostname, or -all-      | #{optionDefaults.boundHost} |
| verbose      | print more diagnostics                        | #{optionDefaults.verbose} |
| debug        | print even more diagnostics                   | #{optionDefaults.debug} |
| readTimeout  | seconds to wait for a client message          | #{optionDefaults.readTimeout} |
| deathTimeout | seconds to wait to kill client                | 3*readTimeout |
