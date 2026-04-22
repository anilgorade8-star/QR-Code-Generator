import qr from 'qr-image';
import fs from 'fs';
import inquirer from 'inquirer';
import { error } from 'console';

inquirer
    .prompt([
        {
            message: 'Type in your URL:',
            name: 'Url'
        }
    ])
    .then((answers) => {
        const url = answers.Url;

        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));

        fs.writeFile('URL.txt', url, (error) => {
            if (error) (error) => {
                console.log("file is save ")
            }
        })

    })
    .catch((error) => {
        if (error.isTtyError) {

        } else {

        }
    });

