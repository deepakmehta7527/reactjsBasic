        topic :-how to integrate api in react js

->bina button pe click kiye hi "ui" pe aw jaye tho useEffect() ka use
kiya jata hai

->three type of life cycle method
1)component mount->creation
2) '' update -when usestate is change or changes in view
3) '' unmount-deletion

for using useeffect first install package "react-router-dom"

4)ek componenet bnao show naam se jha pe "api" define kro
5)"Service" component mein "link" aur "routes" define kro
6)

three type of cycle method
example:-pehle three component bnao nav mein 'home",service,show
naam se uske baad "show" mein api define  kro
aur ab jab aap "home" pe ho eska matlab "component mount" ho gya hai
,aur jab "service" pe click krte ho eska matlab "Home" "unmount" ho gya
hai aur "service" mount ho gya hai ,ab jab "show" pe click krte ho aur
usme "api" call krte
ho tho eska matlab "update component" ho gya hai

7)useEffect "mein jab first time call hoga "created" ka aur 'second time
call hoga "deleted ka




       topic:- useEffect on state change


1)hamare pass "re-rendring" aur "updating" hote hai "re-rendring"
ek component mein jitne component created kiya gya hai sabhi ko
"re-rendring" kr deta hai jabki hum "koi ek " component ko change krna
chahte hai wohi "Update" mein jispe "click" krte hai usme hi changes
hota hai baki mein nhi hota aur "re-rendring" mein sabhi mein ho jata
hai "changes"


2)"re-rendring" mein component refresh ho rha tha jiske waja se
"created component" and "deleted component" show ho rha tha
but jab hum "[]" lgga deta hai "useEffect(()) mein" tho "re-rendring"
stop ho jata hai


3)in future aap chahte ho ki "component" ko refresh krna tho aap "[]"
es bracket mein "uss" state ke naam ko pass kr de tho jab uss state mein
change hogi "re-render" ho jayega

4)"axios" ko baar baar har jagah "import" nhi krna hai esse aggr user
login krta hai tho login krne ke baad access krne mein problem aw skti hai
kyoki "alg alg axios' ek dusre ko nhi janta hai hai aur aapko 'session'
key ek hi milta hai tho login krne ke baad dusra "axios" couldn't
identify you and not give access
5)esliye axios ka ek alg se folder bna ke rakhna hai aur waha se reference deke sabko use krne ke liye
dena hai
