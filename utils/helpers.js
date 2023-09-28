// exported function to format date as MM/DD/YYYY
module.exports = {
    format_date: date => {
      return `${date.getMonth() }/${date.getDate()}/${date.getFullYear()}`;
    }
  };