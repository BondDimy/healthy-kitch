import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {ICategory} from '../../models/ICategory';
import {IRecipe} from '../../models/IRecipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: ICategory [] = [
    // {
    //   name: 'lunch',
    // },
    // {
    //   name: 'dinner',
    // },
    // {
    //   name: 'desserts',
    // },
    // {
    //   name: 'snacks',
    // },
    // {
    //   name: 'beverages',
    // }
  ];

  dietaryRequirements: ICategory [] = [];

  healthBenefits: ICategory [] = [];

  cuisines: ICategory [] = [];

  searchString;

  buildMealFirstItem = '';
  buildMealSecondItem = '';
  buildMealThirdItem = '';

  allMealTypes;

  advancedSearchExpanded = false;

  dietaryRequirementsToSearch = [];
  benefitsToSerach = [];
  cuisinesToSearch = [];
  categoriesToSearch = [];

  recipes: IRecipe [] = [];

  trendings: IRecipe [];

  constructor(private homeService: HomeService) {
  }

  async ngOnInit() {
    // this.allMealTypes = await this.homeService.getMealTypes();
    // this.trendings = await this.homeService.getTrandingRecipes();
    // this.dietaryRequirements = await this.homeService.getDietaryCategories();
    // this.healthBenefits = await this.homeService.getHealthBenefits();
    // this.cuisines = await this.homeService.getCuisines();
    // console.log('home', await this.homeService.getMealTypes());
  }

  openAdvancedSearch() {
    this.advancedSearchExpanded = !this.advancedSearchExpanded;
    this.dietaryRequirementsToSearch = [];
    this.benefitsToSerach = [];
    this.cuisinesToSearch = [];
    this.categoriesToSearch = [];
  }

  chooseDietary(item, checked) {
    if (checked.srcElement.checked) {
      this.dietaryRequirementsToSearch.push(item.id);
    } else {
      this.dietaryRequirementsToSearch = this.dietaryRequirementsToSearch.filter(e => e.name !== item.name);
    }
  }

  chooseBenefits(item, checked) {
    if (checked.srcElement.checked) {
      this.benefitsToSerach.push(item.id);
    } else {
      this.benefitsToSerach = this.benefitsToSerach.filter(e => e.name !== item.name);
    }
  }

  chooseCuisines(item, checked) {
    if (checked.srcElement.checked) {
      this.cuisinesToSearch.push(item.id);
    } else {
      this.cuisinesToSearch = this.cuisinesToSearch.filter(e => e.name !== item.name);
    }
  }

  chooseCategories(item, checked) {
    if (checked.srcElement.checked) {
      this.categoriesToSearch.push(item.id);
    } else {
      this.categoriesToSearch = this.categoriesToSearch.filter(e => e.name !== item.name);
    }
  }

  async submitSearch() {
    const strings = [];
    // strings.push(this.searchString);
    // this.recipes = await this.homeService.getRecipesWithFilters(
    //   strings,
    //   this.categoriesToSearch,
    //   this.cuisinesToSearch,
    //   this.benefitsToSerach,
    //   this.dietaryRequirementsToSearch
    // );
    this.advancedSearchExpanded = false;
  }

  async searchInTrending() {
    this.recipes = await this.homeService.getTrandingRecipes();
    console.log(this.recipes);
  }

  backToHomePage() {
    this.recipes = [];
    this.searchString = '';
    this.buildMealFirstItem = '';
    this.buildMealSecondItem = '';
    this.buildMealThirdItem = '';
  }

  async buildMealSearch() {
    this.searchString = '';
    this.recipes = await this.homeService.getRecipesWithFilters(
      [this.buildMealFirstItem, this.buildMealSecondItem, this.buildMealThirdItem],
      [],
      [],
      [],
      []
    );
  }
}
