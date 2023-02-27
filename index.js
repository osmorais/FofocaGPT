import { ChatGPTUnofficialProxyAPI } from 'chatgpt'
import dotenv from 'dotenv'
import { createInterface } from 'readline'
import { oraPromise } from 'ora'

dotenv.config()

async function main() {
    const api = new ChatGPTUnofficialProxyAPI({
        accessToken: process.env.OPENAI_ACCESS_TOKEN
    })

    const readline = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const readLineAsync = msg => {
        return new Promise(resolve => {
            readline.question(msg, userRes => {
                resolve(userRes);
            });
        });
    }

    process.stdout.write('\n_TRTRTRTRTRTRTR__'); process.stdout.write('_____MLMLMLM____'); process.stdout.write('_TRTRTRTRTRTRTR__'); process.stdout.write('_____MLMLMLM____'); process.stdout.write('___QWQWQWQWQW___'); process.stdout.write('_____DSDSDS_____'); process.stdout.write('____ASASASASAS__'); process.stdout.write('XZXZXZXZXZX____'); process.stdout.write('_DFDFDFDFDDFFD_'); process.stdout.write('\n__RTRTR___RTRTRT_'); process.stdout.write('___MLMLMLMMLML__'); process.stdout.write('__RTRTR___RTRTRT_'); process.stdout.write('___MLMLMLMMLML__'); process.stdout.write('__QWQWQ___QWQWQ_'); process.stdout.write('___SDSDSDSDSD___'); process.stdout.write('__ASASA___ASASA_'); process.stdout.write('_ZXZXZXZXZXZX__'); process.stdout.write('_DFDFDFDFDDFFD_'); process.stdout.write('\n__RTRTR__________'); process.stdout.write('__MLML_____MLML_'); process.stdout.write('__RTRTR__________'); process.stdout.write('__MLML_____MLML_'); process.stdout.write('_QWQWQ__________'); process.stdout.write('__SSDSD__DSDSD__'); process.stdout.write('_ASASA__________'); process.stdout.write('_ZXZX____ZXZXZ_'); process.stdout.write('_____DFFDF_____'); process.stdout.write('\n__RTRTRTRTRT_____'); process.stdout.write('_MLML_______MLML'); process.stdout.write('__RTRTRTRTRT_____'); process.stdout.write('_MLML_______MLML'); process.stdout.write('_WQWQQ__________'); process.stdout.write('_SDSDD____SDSDD_'); process.stdout.write('_ASASA__________'); process.stdout.write('_ZXZX___ZXZXZ__'); process.stdout.write('_____DFFDF_____'); process.stdout.write('\n__RTRTRTRTRT_____'); process.stdout.write('_MLML_______MLML'); process.stdout.write('__RTRTRTRTRT_____'); process.stdout.write('_MLML_______MLML'); process.stdout.write('_QWQWW__________'); process.stdout.write('_SDSDSSDSDSDSDS_'); process.stdout.write('_ASASA_SASASASA_'); process.stdout.write('_ZXZXZXZXZXZ___'); process.stdout.write('_____DFFDF_____'); process.stdout.write('\n__RTRTR__________'); process.stdout.write('__MLML_____MLML_'); process.stdout.write('__RTRTR__________'); process.stdout.write('__MLML_____MLML_'); process.stdout.write('_QWQWQ__________'); process.stdout.write('_DSDSDDSDSSDSDS_'); process.stdout.write('_ASASA_SA_ASASA_'); process.stdout.write('_ZXZXZXZXZ_____'); process.stdout.write('_____DFFDF_____'); process.stdout.write('\n__RTRTR__________'); process.stdout.write('___LMLMLMLMLML__'); process.stdout.write('__RTRTR__________'); process.stdout.write('___LMLMLMLMLML__'); process.stdout.write('__QWQWQ___QWQWQ_'); process.stdout.write('_DSDSD____SDSDS_'); process.stdout.write('__ASASA___SASAS_'); process.stdout.write('_ZXZX__________'); process.stdout.write('_____DFFDF_____'); process.stdout.write('\n_RTRTRTR_________'); process.stdout.write('_____LMLMLML____'); process.stdout.write('_RTRTRTR_________'); process.stdout.write('_____LMLMLML____'); process.stdout.write('___QWQWQWQWQWQ__'); process.stdout.write('_DSDSD____SDSDS_'); process.stdout.write('____SASASASASA__'); process.stdout.write('XZXZXZ_________'); process.stdout.write('____FDFFDFD____');
    process.stdout.write('\n\n\t---Ola! Bem vindo ao FofocaGPT, pra sair basta digitar \'tchau.\' \n')
    var userRes = ''
    process.stdout.write('\t---Como eu posso te ajudar hoje? \n')

    userRes = await readLineAsync('>>> ');

    let botRes = await oraPromise(api.sendMessage(userRes), {
        text: userRes
    })

    process.stdout.write('\n---' + botRes.text)

    do {
        userRes = await readLineAsync('\n>>> ');

        botRes = await oraPromise(
            api.sendMessage(userRes, {
                conversationId: botRes.conversationId,
                parentMessageId: botRes.id
            }),
            {
                text: userRes
            }
        )

        process.stdout.write('\n---' + botRes.text)
    } while (userRes != 'tchau')
    process.exit()
}
main().catch((err) => {
    console.error(err)
    process.exit(1)
})
