import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RestService} from '../rest.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddRecipeComponent implements OnInit {

  recipeTitle = 'Title';
  isRecipeTitleChange = false;


  isModalOpen = false;

  method: string;
  cropedFile: File;

  f: any;

  howManyIngredients = 1;
  maxArr = [1];
  ingredientsList = [null, {}];

  imageChangedEvent: any = '';
  croppedImage: any = '';

  cuisineList = [];
  selectedCuisines = [];

  categoriesList = [];
  selectedCategories = [];

  benifitsList = [];
  selectedBenifits = [];

  requirementsList = [];
  selectedRequirments = [];

  cusinesListToPost = [];
  categoriesListToPost = [];
  benifitsListToPost = [];
  requirmentListToPost = [];
  ingredientsListToPost = [];

  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 2,
    allowSearchFilter: true
  };

  constructor(private rest: RestService, private http: HttpClient) {
  }

  ngOnInit() {
    this.loadMealTypes();
    this.loadDietaryCategories();
    this.loadHealthBenefits();
    this.loadCuisines();
  }

  onCuisineSelect(item: any) {
    this.cusinesListToPost.push(item);
  }

  onCuisineDeselect(item: any) {
    const newArr = [];
    this.cusinesListToPost.forEach(e => {
      if (e.id !== item.id) {
        newArr.push(e);
      }
    });
    this.cusinesListToPost = newArr;
  }

  onSelectAllCuisines(items: any) {
    this.cusinesListToPost = items;
  }

  onDeselectAllCuisines() {
    this.cusinesListToPost = [];
  }

  onCategorySelect(item: any) {
    this.categoriesListToPost.push(item);
  }

  onSelectAllCategories(item: any) {
    this.categoriesListToPost = item;
  }

  onCategoryDeselect(item: any) {
    const newArr = [];
    this.categoriesListToPost.forEach(e => {
      if (e.id !== item.id) {
        newArr.push(e);
      }
    });
    this.categoriesListToPost = newArr;
  }

  onDeselectAllCategories(item: any) {
    this.categoriesListToPost = [];
  }

  onBenefitSelect(item: any) {
    this.benifitsListToPost.push(item);
  }

  onSelectAllBenifits(item: any) {
    this.benifitsListToPost = item;
  }

  onBenefitDeselect(item: any) {
    const newArr = [];
    this.benifitsListToPost.forEach(e => {
      if (e.id !== item.id) {
        newArr.push(e);
      }
    });
    this.benifitsListToPost = newArr;
  }

  onDeselectAllBenifits(item: any) {
    this.benifitsListToPost = [];
  }

  onRequirmentSelect(item: any) {
    this.requirmentListToPost.push(item);
  }

  onSelectAllRequirments(item: any) {
    this.requirmentListToPost = item;
  }

  onRequirmentDeselect(item: any) {
    const newArr = [];
    this.requirmentListToPost.forEach(e => {
      if (e.id !== item.id) {
        newArr.push(e);
      }
    });
    this.requirmentListToPost = newArr;
  }

  onDeselectAllRequirments(item: any) {
    this.requirmentListToPost = [];
  }

  changeRecipeTitle() {
    this.isRecipeTitleChange = true;
  }

  loadMealTypes() {
    this.rest.apiGet('api/recipes/allMealTypes').subscribe((res: any[]) => {
        this.categoriesList = res;
      }
    );
  }

  loadDietaryCategories() {
    this.rest.apiGet('api/recipes/allDietaryCategories').subscribe((res: any[]) => {
        this.requirementsList = res;
      }
    );
  }

  loadHealthBenefits() {
    this.rest.apiGet('api/recipes/allNutritionalBenefits').subscribe((res: any[]) => {
        this.benifitsList = res;
      }
    );
  }

  loadCuisines() {
    this.rest.apiGet('api/recipes/allCuisines').subscribe((res: any[]) => {
        this.cuisineList = res;
      }
    );
  }


  getArrayOfLength(len: number) {
    return this.maxArr.slice(0, len);
  }

  addIngredientToList() {
    this.howManyIngredients++;
    this.maxArr.push(this.maxArr.length + 1);
    this.ingredientsList.push({});
  }

  deleteIngredientFromList(index) {
    if (this.howManyIngredients !== 1) {
      this.ingredientsList.splice(index, 1);
      this.howManyIngredients--;
    }
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(image) {
    console.log('image', image);
    this.croppedImage = image;
    this.f = image;
  }

  imageLoaded() {
    // show cropper
  }

  loadImageFailed() {
    // show message
  }


  postRecipe() {
    const fakeResp = {
      'defaultImageID': null,
      'cuisines': [
        {
          'id': 2
        }
      ],
      'nutritionalBenefits': [
        {
          'id': 3
        }
      ],
      'dietaryCategories': [
        {
          'id': 1
        }
      ],
      'instructions': [
        {
          'descText': 'Instruction 1',
          'sortID': '1'
        },
        {
          'descText': 'Instruction 2',
          'sortID': '2'
        }
      ],
      'mealTypes': [{'id': 2}],
      'measuredIngredients': [
        {
          'amount': '15',
          'metric': {'id': 1},
          'name': 'Ingredient 111'
        }
      ],
      'name': 'Ra Ra Recipe'
    };

    this.cusinesListToPost = this.cusinesListToPost.map(e => {
      return {
        id: e.id
      };
    });

    this.categoriesListToPost = this.categoriesListToPost.map(e => {
      return {
        id: e.id
      };
    });

    this.benifitsListToPost = this.benifitsListToPost.map(e => {
      return {
        id: e.id
      };
    });

    this.requirmentListToPost = this.requirmentListToPost.map(e => {
      return {
        id: e.id
      };
    });

    this.ingredientsListToPost = this.ingredientsList.slice(1).map((e: any) => {
      return {
        amount: e.amount,
        metric: {id: e.metric},
        name: e.name
      };
    });

    // console.log(this.cropedFile);

    this.rest.apiPost('session/createRecipe', {
      defaultImageID: null,
      cuisines: this.cusinesListToPost,
      nutritionalBenefits: this.benifitsListToPost,
      dietaryCategories: this.requirmentListToPost,
      instructions: this.method,
      mealTypes: this.categoriesListToPost,
      measuredIngredients: this.ingredientsListToPost,
      name: this.recipeTitle
    }).subscribe(e => {

      this.http.post(`api/recipes/UploadRecipeImage/${e}`, {
        file: this.cropedFile
      }, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).subscribe(re => {
        console.log(re);
      });
    });


  }

  imageCroppedFile($event: File) {
    console.log('croped file to back', $event);
    this.cropedFile = $event;
  }
}
