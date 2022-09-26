import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: "app-list",
    template: `
    <div class="listItem">
        <p>{{index}}</p>
        <div class="middle-item">
            <h2>{{card[0]}}</h2>
        </div>    
        <h2>{{card[1].toFixed(2)}}</h2>
    </div>
    `,
})
export class ListComponent {

    @Input() card: [string, number]
    @Input() index: number


    changeHandler(){
        
    }
}
