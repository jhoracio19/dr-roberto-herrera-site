import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getAniosExperiencia } from '../../../data/experiencia';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  aniosExperiencia = getAniosExperiencia();
}
