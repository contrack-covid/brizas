const help = (p, date, user, wame) => {
return `
╭━━━━━━━━━━━━━━━━━━━╮
┃@𝑓𝑖𝑔𝑢𝑟𝑖𝑛ℎ𝑎𝑠_𝑤ℎ𝑎𝑡𝑠𝑎𝑝𝑝
┃  
┃ 🕐 𝐃𝐚𝐭𝐚 𝐞 𝐡𝐨𝐫𝐚: ${date}
┃ 🙂 𝐔𝐬𝐮𝐚́𝐫𝐢𝐨: ${user}
┃ 🌎 𝐖𝐚𝐦𝐞: 
┃ ${wame}                                       
┃
┣━━ 🤩 𝑹𝑬𝑫𝑬𝑺 𝑺𝑶𝑪𝑰𝑨𝑰𝑺 🤩 ━╮
┃
┃ 📷 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: @figurinhas_whatsapp
┃
┣━━━⚡ 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙄𝙎 ⚡━━━╮
┃
┃ ${p}info
┃ ${p}del
┃ ${p}delete
┃ ${p}menu
┃ ${p}ping
┃ ${p}destrava
┃ ${p}blocklist
┃ ${p}blacklist
┃ ${p}criador
┃ ${p}toimg (leg, resp img)
┣━━━━😎 𝘾𝙍𝙄𝘼𝘿𝙊𝙍 😎━━━━╮
┃ ${p}blockcmd (cmd sem prefix)
┃ ${p}unblockcmd (cmd sem prefix)
┃ ${p}alerta (txt)
┃ ${p}antinewchat (1 or 0)
┃ ${p}antispamcmd (1 or 0)
┃ ${p}antipv (1 or 0)
┃ ${p}antinewchat (1 or 0)
┃ ${p}infinityblock (1 or 0)
┃ ${p}antiligar (1 or 0)
┃ ${p}addpalavra (txt)
┃ ${p}removepalavra (txt)
┃ ${p}limparchat (txt)
┃ ${p}ataque (txt)
┃ ${p}divulgar (txt)
┃ ${p}entrargp (txt)
┃ ${p}block (num)
┃ ${p}unblock (num)
┃ ${p}msginfo
┃ ${p}chatinfo
┣━━━🙋‍♂️ 𝘽𝙊𝘼𝙎 𝙑𝙄𝙉𝘿𝘼𝙎 🙋‍♂️━━━╮
┃ ${p}byeadd (texto)
┃ ${p}welcomeadd (texto)
┃ ${p}welcomehelp
┣━━━━━⏱️ 𝘾𝙊𝙉𝙏𝘼𝘿𝙊𝙍 ⏱️━━━━━╮
┃ ${p}checkativo (dial)
┃ ${p}rankativo
┃ ${p}atividade
┃ ${p}filtroativo
┃ ${p}banativos
┣━━━━━🔇 𝙈𝙐𝙏𝘼𝙍 🔇━━━━━╮
┃ ${p}mute (marcar)
┃ ${p}desmute (marcar)
┃ ${p}mutados
┣━━━━━💫 𝙇𝙀𝙑𝙀𝙇 💫━━━━━╮
┃ ${p}deletelevel
┃ ${p}level (n/a, num)
┃ ${p}registerlevel
┣━━━━🎮 𝙂𝘼𝙈𝙀𝙎 𝙓𝙋 🎮━━━━╮
┃ ${p}jogatina (1 or 0)
┃ ${p}stealrandom 
┃ ${p}steal (dial number)
┃ ${p}cassino 
┃ ${p}flip 
┃ ${p}doarxp (xp) (dial number) 
┃ ${p}flip 
┣━━━━━⏳ 𝙇𝙄𝙈𝙄𝙏𝙀𝙎 ⏳━━━━╮
┃ ${p}rmlimituser
┃ ${p}resetlimit
┃ ${p}limitcmd (1 or 0)
┃ ${p}mylimit
┣━━━━━❌ 𝘼𝙉𝙏𝙄 ❌━━━━━╮
┃ ${p}antidoc (1 or 0)
┃ ${p}antiloc (1 or 0)
┃ ${p}antiimg (1 or 0)
┃ ${p}antipalavra (1 or 0)
┃ ${p}antivideo (1 or 0)
┃ ${p}antisticker (1 or 0)
┃ ${p}antiaudio (1 or 0)
┃ ${p}antictt (1 or 0)
┃ ${p}antilink (1 or 0)
┃ ${p}antiporn (1 or 0)
┃ ${p}antifake (1 or 0)
┃ ${p}dontback (1 or 0)
┃ ${p}antilinkhard (1 or 0)
┣━━━━👥 𝙂𝙍𝙐𝙋𝙊𝙎 👥━━━╮
┃ ${p}listfake
┃ ${p}listbr
┃ ${p}listddd (country code)
┃ ${p}dbackadd (num)
┃ ${p}dbackrm (num)
┃ ${p}fechargp
┃ ${p}mudardesc
┃ ${p}mudarnome
┃ ${p}abrirgp
┃ ${p}linkgroup
┃ ${p}listadmin
┃ ${p}listonline
┃ ${p}leave
┃ ${p}kick (dial num)
┃ ${p}ban (resp msg)
┃ ${p}promote (dial num)
┃ ${p}demote (dial num)
┃ ${p}add (num)
┃ ${p}roletrussablock (1 or 0)
┃ ${p}welcome (1 or 0)
┃ ${p}simih (1 or 0)
┃ ${p}autostickerimg (1 or 0)
┃ ${p}onmodgrupo
┃ ${p}offmodgrupo
┃ ${p}autoreply (1 or 0)
┃ ${p}marcar
┃ ${p}marcar2
┃ ${p}marcar3
┃ ${p}hidemarcar (txt)
┣━━━━━━🌈 𝙏𝙏𝙋 🌈━━━━━╮
┃ ${p}attp (txt)
┃ ${p}attp2 (txt)
┃ ${p}attp3 (txt)
┃ ${p}attp4 (txt)
┃ ${p}attp5 (txt)
┃ ${p}attp6 (txt)
┃ ${p}ttp (txt)
┃ ${p}ttp2 (txt)
┃ ${p}ttp3 (txt)
┃ ${p}ttp4 (txt)
┃ ${p}ttp5 (txt)
┃ ${p}ttp6 (txt)
┣━━━━✨ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ✨━━━━╮
┃ ${p}stiker (leg, resp img)
┃ ${p}sticker (leg, resp img)
┃ ${p}csticker (leg, resp img)
┃ ${p}cstiker (leg, resp img)
┃ ${p}fstiker (leg, resp img)
┃ ${p}fsticker (leg, resp img)
┃ ${p}nstiker (pack) (author)
┃ ${p}nsticker (pack) (author)
┃ ${p}nfstiker (pack) (author)
┃ ${p}nfsticker (pack) (author)
┃ ${p}macaco
┣━#️⃣ 𝙅𝙊𝙂𝙊 𝘿𝘼 𝙑𝙀𝙇𝙃𝘼 #️⃣━╮
┃ ${p}ttt (dificulty)
┃ ${p}coord (coordenada)
┃ ${p}tttme
┃ ${p}tttrank
┃ ${p}ttthelp
┃ ${p}delttc
┃ ${p}tictactoe
┣━━━━━🎥 𝙑𝙄́𝘿𝙀𝙊 🎥━━━━╮
┃ ${p}rapidovid (resp video)
┃ ${p}lentovid (resp video)
┃ ${p}togif (resp video)
┃ ${p}resizevid (lag) (alt) (resp vid)
┣━━━━━🎨 𝙇𝙊𝙂𝙊𝙎 🎨━━━━╮
┃ ${p}nulis (txt)
┃ ${p}undgrass (txt)
┃ ${p}love (txt)
┃ ${p}coffe (txt)
┃ ${p}coffe2 (txt)
┃ ${p}cemitery (txt)
┃ ${p}gradient (txt)
┃ ${p}glowing (txt)
┃ ${p}shinerainbow (txt)
┃ ${p}graffiti (txt)
┃ ${p}neonpink (txt)
┃ ${p}neonrainbow (txt)
┃ ${p}neongreen (txt)
┃ ${p}neonblue (txt)
┃ ${p}neonyellow (txt)
┃ ${p}neonsky (txt)
┃ ${p}flowerlogo (txt)
┃ ${p}matrixlogo (txt)
┃ ${p}thunderlogo (txt)
┃ ${p}silverplaca (txt)
┃ ${p}goldplaca (txt)
┃ ${p}narutologo (txt)
┃ ${p}phlogo (t1) | (t2)
┃ ${p}mineconquista (t1) | (t2)
┃ ${p}glitch (t1) | (t2)
┃ ${p}ravetxt (t1) | (t2)
┃ ${p}woodtxt (t1) | (t2)
┃ ${p}neon (t1) | (t2)
┃ ${p}sunset (t1) | (t2)
┃ ${p}gimage (txt)
┃ ${p}whatis (txt)
┃ ${p}txt3d (txt)
┣━━━━━📷 𝙁𝙊𝙏𝙊𝙎 📷━━━━╮
┃ ${p}backremove (leg, resp img)
┃ ${p}cropimg (lag) (alt) (resp img)
┃ ${p}bwimg (resp img)
┃ ${p}emoji (emoji)
┃ ${p}checkporn (resp img)
┃ ${p}identifyimg (resp img)
┃ ${p}monochromeimg (resp img)
┃ ${p}resizeimg (lag) (alt) (resp img)
┃ ${p}blurimg (rad) (sig) (resp img)
┣━━━━🔍 𝙋𝙀𝙎𝙌𝙐𝙄𝙎𝘼 🔎━━━╮
┃ ${p}pensador (autor)
┃ ${p}covidbrasil
┃ ${p}covidmundo
┃ ${p}foxnews
┃ ${p}pinterest (name)
┃ ${p}biblia
┃ ${p}playstore (name app)
┣━━⏳ 𝘾𝙊𝙉𝙏𝘼𝙂𝙀𝙈 ⏳━━╮
┃ ${p}halloween (ano)
┃ ${p}kidday (ano)
┃ ${p}motherday (ano)
┃ ${p}fatherday (ano)
┃ ${p}carnaval (ano)
┃ ${p}republic (ano)
┃ ${p}finados (ano)
┃ ${p}tiradentes (ano)
┃ ${p}pascoa (ano)
┃ ${p}natal (ano)
┃ ${p}anonovo
┣━━━━🗣️ 𝙑𝙊𝙕 𝙈𝙊𝘿 🗣️━━━━╮
┃ ${p}esquilo (resp audio)
┃ ${p}grave (resp audio)
┃ ${p}estourar (resp audio)
┃ ${p}rapidoaudio (resp audio)
┃ ${p}lentoaudio (resp audio)
┃ ${p}bass (resp audio)
┣━━━━━🎵 𝘼𝙐𝘿𝙄𝙊 🎵━━━╮
┃ ${p}shazam (resp audio)
┃ ${p}gtts (la) (txt)
┃ ${p}play (music name)
┃ ${p}playv2 (music name)
┃ ${p}tomp3 (cap, resp vid)
┃ ${p}ytsrc (name)
┃ ${p}ytmp4 (yt url)
┃ ${p}ytmp3 (yt url)
┣━━━━━━🧾 𝙏𝙀𝙓𝙏𝙊 🧾━━━━╮
┃ ${p}nameninja (name)
┃ ${p}fakeidentity
┃ ${p}traduz (la) (txt)
┃ ${p}wame
┃ ${p}ocr (leg, resp img)
┃ ${p}idioma
┃ ${p}frase
┣━━━━━🇯🇵 𝘼𝙉𝙄𝙈𝙀𝙎 🇯🇵━━━━╮
┃ ${p}randomanime
┃ ${p}randomkiss
┃ ${p}randomhug
┃ ${p}nekoanime
┃ ${p}wait (cap, resp vid)
┃ ${p}slap
┃ ${p}kemonomimi
┣━━━━🏆 𝙍𝘼𝙉𝙆𝙄𝙉𝙂𝙎 🏆━━━╮
┃ ${p}ranklindo
┃ ${p}rankfeio
┃ ${p}rankgado
┃ ${p}rankqi
┃ ${p}rankfofo
┃ ${p}rankotaku
┃ ${p}rankgay
┣━━━🔮 𝙋𝙍𝙀𝙑𝙄𝙎𝙊𝙀𝙎 🔮━━╮
┃ ${p}ship (num1) (num2)
┃ ${p}corno (num1)
┃ ${p}dado
┃ ${p}gay (num1)
┃ ${p}qi (num1)
┃ ${p}seudia (num1)
┃ ${p}feio (num1)
┃ ${p}bv (num1)
┃ ${p}gado (num1)
┃ ${p}gostoso (num1)
┃ ${p}gostosa (num1)
┃ ${p}randomship (n1, n/a)
┣━━━━📱 𝙌𝙍 𝘾𝙊𝘿𝙀 📱━━━━╮
┃ ${p}qrcode (txt)
┃ ${p}qrcodebg (txt)
┃ ${p}qrcodegb (txt)
┃ ${p}qrcodebb (txt)
┃ ${p}qrcodebb1 (txt)
┃ ${p}qrcoderb (txt)
┃ ${p}qrcodebr (txt)
┣━━━━😝 𝘿𝙄𝙑𝙀𝙍𝙎𝘼̃𝙊 😝━━━╮
┃ ${p}papel
┃ ${p}pedra
┃ ${p}tesoura
┃ ${p}cassino
┃ ${p}meme
┃ ${p}memeindo
┃ ${p}darkjokes
┣━━━━💱 𝙈𝙊𝙀𝘿𝘼 💱━━━━━╮
┃ ${p}dolarhoje
┃ ${p}bitcoinhoje
┃ ${p}realhoje
┃ ${p}cvoin (c1)|(c2)
┃ ${p}ccoin (c1)|(c2)|(num)
╰━━━━━━━━━━━━━━━━━━━╯`
}

exports.help = help


