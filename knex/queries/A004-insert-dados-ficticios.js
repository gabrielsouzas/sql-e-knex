const knex = require('../../knex/config/database');
const query = `
INSERT INTO users (
  first_name,
  last_name,
  email,
  password_hash,
  created_at,
  salary
)
VALUES
  ("Keelie", "Petersen", "Nulla@lobortis.org", "ZHE87TSO6DA", "2021-07-10 20:51:19", 4700),
  ("Benjamin", "Daniels", "nec@dolor.org", "CNW39GMH4NZ", "2021-01-30 22:33:14", 5100),
  ("Aspen", "Cain", "Nullam.ut@primisinfaucibus.com", "ZFC58TUT0MB", "2020-06-12 14:52:39", 4950),
  ("Oprah", "Reeves", "nisi.nibh.lacinia@mattissemper.net", "LYD20HWD3UN", "2020-03-05 13:41:49", 5200),
  ("Lynn", "Hendricks", "neque.tellus.imperdiet@dolor.net", "CRA59DIT0TW", "2020-04-12 15:26:28", 5750),
  ("Wayne", "Walters", "torquent.per.conubia@Utsagittislobortis.co.uk", "BVD19AUV2JO", "2020-10-04 03:36:24", 4600),
  ("Shana", "Barnett", "tempus.scelerisque@lectusjustoeu.net", "GXF87LGA4XZ", "2020-01-26 04:16:58", 5400),
  ("Merrill", "Dunn", "a.feugiat.tellus@CuraePhasellus.ca", "BQS83WCA3QM", "2021-05-27 20:27:02", 5000),
  ("Minerva", "Craft", "ac.mattis@liberoIntegerin.ca", "XAX94LBA7BI", "2021-11-17 20:14:37", 5900),
  ("Ishmael", "Garcia", "Nunc.sed@tellus.co.uk", "MYA25WWC2HB", "2020-04-15 17:51:28", 5100),
  ("Xyla", "Rocha", "mi.enim.condimentum@faucibus.ca", "NJB51CIZ2YT", "2021-10-11 14:19:33", 4800),
  ("Giacomo", "Kidd", "quis.diam@convallisin.com", "QAM99GPQ0BE", "2020-05-14 16:04:51", 5500),
  ("Lucian", "Shepherd", "dis@Integervulputate.co.uk", "PKI61CTD1WE", "2021-02-20 06:42:36", 6100),
  ("Iona", "Gillespie", "ac.facilisis@vitae.org", "THH68JIH4QZ", "2020-08-27 05:26:00", 4900),
  ("Nyssa", "Roberson", "massa.Suspendisse@nisidictumaugue.co.uk", "VOW26KCN4CZ", "2021-01-11 19:18:46", 5000),
  ("Lacy", "Guthrie", "purus@ullamcorper.net", "NGL35MWG5OL", "2020-03-15 04:05:58", 5300),
  ("Karina", "Carson", "a.aliquet@cursusaenim.org", "RMZ97KTB0LP", "2020-11-09 01:34:20", 4500),
  ("Carly", "Wilkinson", "egestas.a.dui@utcursusluctus.co.uk", "YUS28DJB5UR", "2021-05-28 19:43:17", 4600),
  ("Madison", "Pierce", "arcu.eu@antelectus.edu", "JVZ98CGE6XW", "2020-09-04 19:06:55", 4700),
  ("Carly", "Guerrero", "feugiat.non.lobortis@porttitorvulputate.ca", "HAS68KVZ2IW", "2021-01-26 02:40:51", 4900),
  ("Eric", "Cash", "Aenean.eget@libero.ca", "JTY19RSK6AY", "2021-08-28 16:36:43", 6200),
  ("Hannah", "Pitts", "dapibus.ligula.Aliquam@magnaPhasellusdolor.ca", "OMF54AOD3FM", "2021-08-28 19:44:45", 6100),
  ("Gray", "Barnes", "Aenean.egestas.hendrerit@pharetranibh.edu", "RUY00LNZ4XD", "2021-02-09 12:08:06", 5500),
  ("Seth", "Duke", "ante.ipsum.primis@Quisque.ca", "YUA24MFN1ES", "2020-09-27 01:28:26", 5050),
  ("Leandra", "Ratliff", "Suspendisse@feugiatSednec.edu", "HSC55TYX0JV", "2020-01-25 09:46:01", 4950),
  ("Jillian", "Lamb", "arcu@rutrum.org", "DWR34TLE3MF", "2020-06-07 09:55:48", 4700),
  ("Baker", "Richards", "elit@Maecenasmalesuada.edu", "UPI22LBI7ZW", "2020-02-22 22:36:48", 5400),
  ("Kennan", "Callahan", "tortor.dictum.eu@intempus.org", "GEL99BNX1UJ", "2021-12-03 20:48:09", 5800),
  ("Hedy", "Kim", "amet@cursusinhendrerit.com", "NZR75UQU2MQ", "2020-12-27 02:47:14", 4900),
  ("Dolan", "Pearson", "semper.tellus.id@fringillaporttitor.edu", "HXS85QIR7YW", "2021-06-12 00:11:24", 5150),
  ("Tanisha", "Atkins", "convallis.ante@id.org", "QFN12VIE2CM", "2021-09-07 00:41:28", 5300),
  ("Hedwig", "Freeman", "elit.Curabitur@dolorvitaedolor.co.uk", "WFW24JAV6HV", "2020-07-19 17:14:29", 5200),
  ("Xanthus", "Dejesus", "diam@Suspendisse.co.uk", "FDB64NOK6HP", "2020-02-16 20:16:21", 4700),
  ("Xavier", "Walton", "magna.Phasellus@orci.co.uk", "ROH80LTQ3UL", "2021-04-09 23:42:08", 6000),
  ("Melissa", "Boone", "Nullam.scelerisque.neque@imperdietdictummagna.com", "ILA84FVZ1LT", "2021-01-02 11:12:48", 5900),
  ("Elijah", "Espinoza", "Nunc.ac.sem@necimperdietnec.edu", "CUY37VUP3IR", "2020-01-31 13:09:25", 5000),
  ("Xena", "Aguirre", "mollis.Integer@Phasellus.edu", "TGB25KRR0VO", "2020-03-10 08:58:41", 4800),
  ("Hayfa", "Powers", "posuere.at.velit@fringillaporttitor.edu", "TEO28VNF5BU", "2021-01-18 08:44:16", 4700),
  ("Armando", "Nunez", "nulla.ante.iaculis@Morbiaccumsanlaoreet.ca", "XUT85OLS0CA", "2021-11-07 05:13:37", 5400),
  ("Hayley", "Stanley", "ipsum.Suspendisse@velit.edu", "SWB87FCO7UY", "2020-04-20 07:20:53", 4950),
  ("Zia", "Elliott", "In.lorem.Donec@mattis.com", "SXA35NRK8LC", "2021-09-08 10:45:44", 5200),
  ("Vernon", "Wolf", "porttitor.scelerisque.neque@disparturient.net", "RSJ71EFP1HP", "2020-05-17 20:37:24", 5000),
  ("Zachery", "Copeland", "libero@anunc.edu", "HTN15HIK1JO", "2020-05-12 02:22:09", 4800),
  ("Hayfa", "Tanner", "dignissim.Maecenas@eueros.co.uk", "VFK34JGG4GH", "2020-07-08 00:25:22", 5500),
  ("Rosalyn", "Mercado", "ullamcorper.nisl.arcu@eunequepellentesque.org", "YZT80OSH6AS", "2021-09-04 11:33:50", 5600),
  ("Kalia", "Russell", "Pellentesque@placerat.net", "GHM91NMW9XI", "2021-09-07 18:07:42", 4900)
;
`;

knex
  .raw(query)
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
