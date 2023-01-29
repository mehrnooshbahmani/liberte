const fs = require('fs');

const liberte_content = fs.readFileSync('lib/liberte_content.ts',{ encoding: 'utf8' })

if (fs.existsSync('webpack.config.ts')){
    const webpack_content=fs.readFileSync('webpack.config.ts',{ encoding: 'utf8' })
    fs.truncateSync('webpack.config.ts',0);
    fs.appendFileSync('webpack.config.ts',`${liberte_content}\n /* ${webpack_content} */`,{ encoding: 'utf8' })
}
else {
    fs.writeFileSync( 'webpack.config.ts',`${liberte_content.ts}\n` ,{ encoding: 'utf8' } )
}
