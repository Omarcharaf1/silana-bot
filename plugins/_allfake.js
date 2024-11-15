import fs from 'fs';
import fetch from 'node-fetch';
import moment from 'moment-timezone';
import axios from 'axios';

let jarsepay = (m) => m;

jarsepay.all = async function (m) {
  let name = await conn.getName(m.sender);
  let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
  
  try {
    pp = await this.profilePictureUrl(m.sender, 'image');
  } catch (e) {}

  global.idchannel = '120363346268701329@newsletter';
  global.doc = pickRandom([
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/msword',
    'application/pdf',
  ]);
  global.fsizedoc = pickRandom([2000, 3000, 2023000, 2024000]);

  global.kontak2 = [
    [
      owner?.[0] || '',
      await conn.getName((owner?.[0] || '') + info.nomorowner + '@s.whatsapp.net'),
      `${info.namaowner || 'Owner'}`,
      'https://whatsapp.com',
      true,
    ],
  ];

  global.fkontak = {
    key: {
      fromMe: false,
      participant: m.sender,
      ...(m.chat ? { remoteJid: info?.namabot || 'bot' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };

  global.ephemeral = '86400';
  global.ucapan = ucapan();
  global.botdate = date();

  global.adReply = {
    contextInfo: {
      forwardingScore: 0,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: idchannel,
        serverMessageId: 103,
        newsletterName: `⌜ ${info?.namabot || '𝘌𝘙𝘌𝘕 𝘉𝘖𝘛'} ⌟  ||  Channel Information`,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: info?.namebot || 'Eren bot',
        body: 'إضغط لمتابعتي على انستجرام',
        previewType: 'VIDEO',
        thumbnailUrl: 'https://i.ibb.co/fX72BsQ/9ba9dc0b1baeb72420e08d39d35d8a44.jpg',
        sourceUrl: 'https://www.instagram.com/nvm2p',
      },
    },
  };

  global.fakeig = {
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        title: info?.namabot || 'Bot',
        body: 'hey',
        thumbnailUrl: pp,
        sourceUrl: 'https://instagram.com',
      },
    },
  };
};

export default jarsepay;

function date() {
  let d = new Date(new Date() + 3600000);
  let locale = 'id';
  let week = d.toLocaleDateString(locale, {
    weekday: 'long',
  });
  let date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return `${week}, ${date}`;
}

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH');
  if (time >= 18) return 'Selamat malam 🌙';
  if (time >= 15) return 'Selamat sore 🌇';
  if (time > 10) return 'Selamat siang ☀️';
  if (time >= 4) return 'Selamat pagi 🌄';
  return 'Selamat malam 🌙';
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}