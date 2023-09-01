import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['628xxx', 'Xyroinee', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6289673236868' // nomer wangsaf bot
global.packname = 'MarV - MD by'
global.author = '© MarV'
global.namebot = '​MarV - MD'
global.wm = '© Bot By MarV'
global.stickpack = 'anu - MD by'
global.stickauth = '© Xyroine'
global.fotonya = 'https://telegra.ph/file/83b522fd80b660705d1cd.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/callme.drn'
global.sgh = 'https://github.com/PunyaBrian'
global.sgc = 'https://chat.whatsapp.com/Iaw1mMZIJXwERwXfcNalk5'
// Donasi
global.psaweria = 'CLOSED'
global.ptrakterr = 'CLOSED'
global.povo = '0899-4830-639'
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = '8b76c249d1439db18eaad3c7'
global.rose = 'TAMVAN'
global.xyro = 'CkXt8JsvfH'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "CkXt8JsvfH",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

