<!-- hamare pass multiple component ja pages hote hai tho ek button pe click krne pe dusre page pe jaane
ke liye "router" ka use kiya jata hai -->

<!-- kese use kre -->
a)react-router-dom package install kre
b)BrowserRouter main "main.js" mein jo "<App/>" usse wrap krde esse pure application ke "router" apply ho jayega
c) pehle tho "nav" bnaye "Link" ka use krke
d)"Link" ka use krke "url" set kr skte hai but "ui" page ka component nhi change hota hai esliye "router" ka use
krke set krna hota hai "url" ke according konse "component" run hona chahiye
d)"Link" ki tarah "NavLink" bhi kaam krta hai but "NavLink" hamme special "style" provide krta hai
e) uske baad "Routes" mein "Route" ko wrap krke "path" aur "element" de

f)"routes" ka use krke "corresponding URL" ka use krke  "route" ka istemal kiya jata hai aur
kya open hona chahiye ye bhi bataya jata hai

g)"routes" ko ek alag folder mein rakha jata hai jiska naam "helper" ja "utilites" rakha ja skta hai
yaha pe aise file ko rakhna hai jo "ui" pe view nhi hote hai just as helper kaam krte hai

h)nav "Link" ko bhi alag file mein rakha jata hai

i)"useParams()" ->eska estemal krke "dyanamic" button pe click krne pe jo "result" "url" main show ho rha hota hai tho usse koi variable mein store kiya ja skta hai
example:- aggr url hai "/user/ayush" tho automatic "ayush" ko store kiya ja skta hai
"useParams()" ka estemal krke

j)"important"
dynamic "path" mein jo "element" main "component" use kiya ussi pe "useParams()" Ka estemal kre

k)"useNavigate()" ka use krke "previous" page pe ja skte hai button
pe click krne pe bas aapko "useNavigate()" ka kissi variable mein store kra ke
koi function bna ke jo variable mein "useNavigate()" ko store kiya tha uss variable
mein "to" wale "url" ko pass krna hahi example-> navigate("/user)
l)jab aapko ek step "previous" jana hai tho aap "-1" bhi pass kr skte ho
example:- navigate(-1)

m)aggr chahte ho ki "user" ka jo "dynamic" detail "user" component ke neeche hi show  ho tho "outlet" ka
use kiya jata hai aur "jo child wale" "route" ko "parent" route mein "wrap" kr diya jata hai uske baad
"jha" pe show krna hai "detail" ko waha pe "Outlet" ko "daal" dena hai
aggr 'Outlet" ka use nhi krte ho tho "child" component "ui" pe display nhi hoga


<!-- let summarize abhi tk kya kya dekha -->
a)routes,route,BrowserRouter
b)Link,NavLink
c)useParams()
d)useNavigate()
e)Outlet
f)"/user/:username :- after colon show it is dynamic route
