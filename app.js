const chart = document.querySelector('#chart').getContext('2d')

new Chart(chart, {
    type : 'bar',
    data :{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    datasets : [
        {
            label : 'HOT',
            data:[ 19234, 20100, 21034, 24002, 26789, 25300, 22040, 27001,
             29452, 31050],
            borderColor:'red',
            borderWidth: 2
        },
        {
            label : 'ADA',
            data:[ 4200, 3800, 3686, 3890, 4390,  5300, 5040, 5701,
                6252, 5000],
               borderColor:'blue',
               borderWidth: 2
        }
    ]
    },
    options :{
        responsive : true
    }
})

const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const sidebar = document.querySelector('aside')

menuBtn.addEventListener('click', ()=>{
    sidebar.style.display = 'block'
})

closeBtn.addEventListener('click', ()=>{
    sidebar.style.display = 'none'
})

const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme')
})