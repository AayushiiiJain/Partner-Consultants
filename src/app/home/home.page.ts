import { Component } from '@angular/core';
import * as Enums from '../../../enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  homeIntroductionText;
  infographicApproachText;
  endClientsServiceModelsProjectWorkText;
  endClientsServiceModelsMonthlyRetainerText;
  endClientsServiceModelsOnCallAssignmentText;
  consultingFirms1Text;
  consultingFirms2Text;
  chooseUsPracticalSolutionsText;
  chooseUsInDepthResearchText;
  chooseUsIndustryExpertiseText;

  constructor() {
    this.homeIntroductionText = Enums.homePageContent.homeIntroduction;
    this.infographicApproachText = Enums.homePageContent.infographicApproach;
    this.endClientsServiceModelsProjectWorkText = Enums.homePageContent.endClientsServiceModelsProjectWork;
    this.endClientsServiceModelsMonthlyRetainerText = Enums.homePageContent.endClientsServiceModelsMonthlyRetainer;
    this.endClientsServiceModelsOnCallAssignmentText = Enums.homePageContent.endClientsServiceModelsOnCallAssignment;
    this.consultingFirms1Text = Enums.homePageContent.consultingFirms1;
    this.consultingFirms2Text = Enums.homePageContent.consultingFirms2;
    this.chooseUsPracticalSolutionsText = Enums.homePageContent.chooseUsPracticalSolutions;
    this.chooseUsInDepthResearchText = Enums.homePageContent.chooseUsInDepthResearch;
    this.chooseUsIndustryExpertiseText = Enums.homePageContent.chooseUsIndustryExpertise;
  }

}
