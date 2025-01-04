
            topic:-Redux


1)esse pehle "useContext" ka use kr rhe the jo ko "mini" project ke
liye accha hai but "large" project ke liye thik nhi hai jaise
aggr hum different different data ki need ho tho hume baar baar
"Context" krke wrap krna pdega jisse jab "app" ko data access krna
ho tho "complex" ho jayega aur ess krke "context" ko "large data"
mein use krna "inefficient" mana jata hai tho
eski jagah "redux toolkit" ka use kiya jata hai

     *****let seee kese "redux toolkit" ka use kiya jata hai

step1:-pehle "different different data create krna hai aur usse
Redux kha jata hai

step2:- "state ja store" mein "redux" ko rakhna hai

step3:-ab "useSelector()" ki help se "data" ka use krna hota hai

step4:-aggr kissi ko "update" krna hai tho "action" se kiya ja sakta hai

let see cycle:-


store-->component->action-->reducers->store (same procedure work in the
form of loop)


     "define redux tool kit"

1)redux toolkit ka kaam sbhi data ko centralized krke "data" ko sbhi
component mein use krne ke liye deta hai


2)don't try to change "initialState" name in creating counter slice time


3)"synchronization" chl jata hai but "asynchronization" nhi chlta
directly

4)incrementByAmount: (state, action) => {
      state.value += action.payload
    }     "ye code "reducers" file mein likha huwa hai"
    aur dusra "component" mein "action" perform krna hai tho eske liye jab aap "onclick"
     krne pe "jab koi value pass krte ho tho ye "action mein store hoga "incrementByAmount" ke
     uske baad "action.payload" ki jagah jo "value" pass kiya woh "show" hoga aur "state.value"
     mein woh set ho jayega
    " onClick={() => dispatch(incrementAsync(5))}"

5)pehle 'counterSlice" naam se redux bnaya gya
  ->uske baad redux ko "store" main rakha gya
  ->uske baad "component" mein use kiya gya
