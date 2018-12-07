const ua = require('universal-analytics');

const usr = ua('UA-128423616-1', '6a14abda-6b12-4578-bf66-43c754eawda9');
function trackEvent(category, action, label, value) {
usr
    .event(
        "goodbye",
        "Event Action",
        "…and a label", 
        42
    )
    .send();
    console.log('send????')
}
trackEvent();
//   usr.event("Event Category", "Event Action", "…and a label", 42).send()
