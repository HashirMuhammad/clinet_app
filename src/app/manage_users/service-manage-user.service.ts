import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceManageUserService {

  constructor() { }

  avaColoe(letter: string) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const colors = [
        '#FF5733', '#FFBD33', '#FFD133', '#FFE033', '#F1FF33',
        '#C1FF33', '#91FF33', '#61FF33', '#33FF36', '#33FF66',
        '#33FF96', '#33FFC6', '#33FFF6', '#33D9FF', '#33A9FF',
        '#3379FF', '#3349FF', '#6B33FF', '#9B33FF', '#CB33FF',
        '#FA33FF', '#FF33E6', '#FF33B6', '#FF339F', '#FF3376'
    ];

    const index = alphabet.indexOf(letter.toUpperCase());
    if (index !== -1) {
        return colors[index % colors.length];
    }

    return '#CCCCCC'; // Default color if letter is not found
  }
}
