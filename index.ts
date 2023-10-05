import { data } from "./data";
import { md5, sha256 } from "./hash";

let csv =
  "Frase,Frase válida?,MD5 Fornecido,MD5 Gerado,MD5 Válido?,SHA256 Fornecido,SHA256 Gerado,SHA256 Válido?\n";

data.forEach((item) => {
  const MD5Hash = md5(item.str);
  const SHA256Hash = sha256(item.str);
  const isValidMD5Hash = MD5Hash === item.md5;
  const isValidSHA256Hash = SHA256Hash === item.sha256;
  const isValidStr = [isValidMD5Hash, isValidSHA256Hash].every(Boolean);

  csv += `"${item.str}",${isValidStr},${item.md5},${MD5Hash},${isValidMD5Hash},${item.sha256},${SHA256Hash},${isValidSHA256Hash}\n`;
});

const csvTabela = Bun.file("tabela.csv");
Bun.write(csvTabela, csv);

export { md5, sha256 };
