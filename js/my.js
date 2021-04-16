// console.log($);

// jQuery Syntax 
// $('selector').action();

$(document).ready(function(){

    console.log('I am a new file');

    // clicks on all element 
    $('p').click();
    $('p').click(function(){
        console.log('you clicked on p', this);
        // $('p').hide();
        // $('#id1').hide();
        // $('.anil').hide();
        // $(this).hide();
    });
    
    //Selectors
    // 1. element 
    // 2. id
    // 3. class

    // other selectors
    // $('*').click();
    // $('p.anil').click();
    // $('p:first').click();

    // Events in jQuery 
    // Mouse = click, dblclick, mouseenter, mouseleave
    // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    // form = submit, change, focus, blur 
    // document = load, resize, scroll, unload 

    
    // $('p').dblclick(function(){
    //     console.log('you double clicked on p', this);
    //     // $('p').hide();
    // });

    // $('p').mouseenter(function(){
    //     console.log('you entered on p', this);
    //     // $('p').hide();
    // });
    // mouseup - click karke ke choda
    // mousedown - kahi bhi click kro

    
    // $('p').hover(function(){
    //     console.log('you hovered on p', this);
    //     // $('p').hide();
    // },
    // function(){
    //     console.log('Thanks You');
    // }
    // );

    //Multiple elements
    //Demoing the 'ON' method
    // $('p').on(
    //     {
    //         click: function(){
    //             console.log('Thanks for clicking', this);
    //         },
    //         mouseleave: function(){
    //             console.log('MouseLeave - Rishab');
    //         }
    //     }
    // );

    // Hide and Show 
    // $('#sourav').hide(1000, function(){
    //     console.log("Hide");
    // });
    // $('#sourav').show(2000, function(){
    //     console.log("Show");
    // });
    // $('#but').click(function(){
    //     $('#sourav').toggle();
    // })

    // HW-
    // fadeIN()
    // fadeOut()
    // fadeToggle()
    // fadeTo()

    // $('#but').click(function(){
    //     $('#sourav').fadeOut(3000);
    // })
    // $('#but').click(function(){
    //     $('#sourav').fadeTo(2000, 0.3);
    // })



});
