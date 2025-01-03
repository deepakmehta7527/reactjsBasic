<!-- hamare pass multiple component ja pages hote hai tho ek button pe click krne pe dusre page pe jaane
ke liye "router" ka use kiya jata hai -->

<!-- kese use kre -->
a)react-router-dom package install kre
b)BrowserRouter main "main.js" mein jo "<App/>" usse wrap krde esse pure application ke "router" apply ho jayega
c) pehle tho "nav" bnaye "Link" ka use krke
d)"Link" ka use krke "url" set kr skte hai but "ui" page ka component nhi change hota hai esliye "router" ka use
krke set krna hota hai "url" ke according konse "component" run hona chahiye
e) uske baad "Routes" mein "Route" ko wrap krke "path" aur "element" de

f)"routes" ka use krke "corresponding URL" ka use krke  "route" ka istemal kiya jata hai aur
kya open hona chahiye ye bhi bataya jata hai

g)"routes" ko ek alag folder mein rakha jata hai jiska naam "helper" ja "utilites" rakha ja skta hai
yaha pe aise file ko rakhna hai jo "ui" pe view nhi hote hai just as helper kaam krte hai

h)nav "Link" ko bhi alag file mein rakha jata hai