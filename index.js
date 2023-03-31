const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themetoggler =document.querySelector(".theme-toggler");

menuBtn.addEventListener('click',() =>{
    sideMenu.style.display='block';
})

closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
})

//change the theme
themetoggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');


    themetoggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themetoggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


//fill orders in table
Orders.forEach(order=>{
    const tr =document.createElement('tr');
    const trcontent =`
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">Details</td>
    `;

    tr.innerHTML=trcontent;
    document.querySelector('table tbody' ).appendChild(tr);
})