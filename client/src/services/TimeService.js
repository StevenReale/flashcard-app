export default {
    nowUTC() {
        const currentDate = new Date();
        const utcDate = new Date(Date.UTC(
          currentDate.getUTCFullYear(),
          currentDate.getUTCMonth(),
          currentDate.getUTCDate(),
          currentDate.getUTCHours(),
          currentDate.getUTCMinutes(),
          currentDate.getUTCSeconds(),
          currentDate.getUTCMilliseconds()
        ));
      
        return utcDate;
      }
}