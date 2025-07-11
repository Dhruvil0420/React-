
// function reactrender(reactelements,maincontainer){
//     const domelements = document.createElement(reactelements.type);
//     domelements.innerHTML = reactelements.Children;
//     domelements.setAttribute('href',reactelements.props.href);
//     domelements.setAttribute('target',reactelements.props.target);
//     maincontainer.appendChild(domelements);
// }

function reactrender(reactelements,maincontainer){
    const domelements = document.createElement(reactelements.type);
    domelements.innerHTML = reactelements.Children;
    for(const prop in reactelements.props) {
        domelements.setAttribute(prop,reactelements.props.prop );
    }
    maincontainer.appendChild(domelements);
}
const reactelements = {
    type:'a',
    props: {
        href: "htpps://google.com",
        target: '_balck'
    },
    Children : "Click Me To Visit Google "
}
const maincontainer = document.getElementById("root");

reactrender(reactelements,maincontainer);