const  records_wrap=document.querySelector(".records");
const  records_numbers = document.querySelectorAll(".number");




window.addEventListener("scroll",() =>
{
    countUp();
})

function checkScroll(el) 
{
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >=rect.top + el.offsetHeight) return true;
    return false;
}

function countUp()
{
    if (!checkScroll(records_wrap)) return;
    records_numbers.forEach(numb =>
        {
            const updateCount = () => 
            {
                let currentNum = +numb.innerText;
                let maxNum = +numb.dataset.num;
                console.log(maxNum);
                let speed =30;
                const increment = Math.ceil(maxNum/speed);
                
                if(currentNum<maxNum)
                {
                    numb.innerText= currentNum+increment;
                    setTimeout(updateCount, 1)
                }

                else
                {
                    numb.innerText=maxNum;
                }
            };
            setTimeout(updateCount, 400)
        });
}

$(document).ready(function () {

    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.site-main .client-area .owl-carousel ').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

})
