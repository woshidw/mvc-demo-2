import $ from "jquery"
import "./app3.css"
const $square = $('#app3 .square')

$square.on('click',()=>{
    $square.toggleClass('active')//toggleClass如果没有加就加上，有就删除
})