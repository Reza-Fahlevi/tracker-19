export const success = '#00E096'
export const danger = '#FF3D71'
export const warning = '#FFAA00'
export const basic = '#EDF1F7'
export const primary = '#FCAF58'

export const disabled = '#F4F4F4'
export const white = '#FFFFFF'
export const black = '#222B45'
export const blackMain = '#3F3D56'
export const blackSecondary = '#4A4A4A'

export const poppins = 'Poppins, sans-serif'

// loading component
export const loading = (height) => <img src='/assets/img/loading.gif' alt="Loading" style={{ height: height || '25%' }} />

// function for formatting number and add '.' after three digit
export const formatNumber = (num) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

// dynamic sorting array
export const dynamicSort = (property, order) => {
  var sort_order = 1;
  if (order === "desc") {
    sort_order = -1;
  }
  return function (a, b) {
    // a should come before b in the sorted order
    if (a[property] < b[property]) {
      return -1 * sort_order;
      // a should come after b in the sorted order
    } else if (a[property] > b[property]) {
      return 1 * sort_order;
      // a and b are the same
    } else {
      return 0 * sort_order;
    }
  }
}