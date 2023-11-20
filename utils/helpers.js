

export const formatRupiah = (number = 0) => {
  let rupiah = ''
  const numberRev = number.toString().split('').reverse().join('')

  for (let i = 0; i < numberRev.length; i++) if (i % 3 == 0) rupiah += numberRev.substr(i, 3) + '.'
  rupiah = rupiah.split('', rupiah.length - 1).reverse().join('')
  return 'Rp ' + (rupiah.length < 1 ? '0' : rupiah)
}