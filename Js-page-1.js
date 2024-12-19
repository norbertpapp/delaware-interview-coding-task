import {LitElement, html, render, map} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

const colors = [
    {
        id: 'black',
        color: '#03071e',
        title: 'Black',
    },
    {
        id: 'zinc-grey',
        color: '#353535',
        title: 'Zinc Grey',
    },
    {
        id: 'evening-pink',
        color: '#3d2645',
        title: 'Evening Pink',
    },
];

const propertyTile = (items) => html`
${map(items, (i) => html`<div class="property-picker__tile property-picker__tile--${i.id}">
    <div class="property-picker__tile-img"></div>
    <h4 class="property-picker__tile-title">${i.title}</h4>
    <span class="property-picker__arrow-icon" href="#">&rsaquo;</span>
</div>`)}`;

const wrapper = document.getElementById('property-picker');
render(propertyTile(colors), wrapper);