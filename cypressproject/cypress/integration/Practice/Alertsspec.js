import "cypress-xpath"
import Alerts from "./Alerts"


describe('keywords', () => {
  const alert =  new Alerts()
   
   it('Alerts website', () => {
        alert.alertsurl()

    })
    it('Alert buttons', () => {
        alert.clickalertpopupbutton()
        alert.clickconfirmpopupbutton()
    })
})
   