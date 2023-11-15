import { Component } from '@angular/core';

@Component({
  selector: 'app-preview-article',
  templateUrl: './preview-article.component.html',
  styleUrls: ['./preview-article.component.css'],
})
export class PreviewArticleComponent {
  textarea = `accountancy and legal firms
  Accountancy and legal firms may seem like completely different worlds, but in reality, they share a close relationship that is crucial for the success of businesses. Both professions are intricately linked as they provide services that complement each other.

  Legal firms often require the expertise of accountants to handle financial matters related to their clients' cases. Accountants in legal firms play a vital role in analyzing financial records, conducting audits, and providing expert advice on tax implications. They ensure that all financial aspects of a case are thoroughly examined and properly documented.
  
  On the other hand, lawyers also play an essential role in accountancy firms by offering legal counsel and guidance on various matters such as taxation laws, contracts, business regulations, and more. Their knowledge of the legal landscape ensures that accountants make informed decisions while helping clients navigate complex legal issues.
  
  The collaboration between accountants and lawyers is key to providing comprehensive solutions to clients' needs. By working together closely, these professionals can offer tailored advice that takes into consideration both financial and legal perspectives.`;

  include_in = 'Monthly Newsletter';
  include_in_currently_proofing = ['test adnan', 'adnan_test_2023'];
  source = '';
  category = 'Overseas personal tax issues';
  profiling = 'Limited Company + private client - VAT reg, employees';
  newsfeed = 'test';
  featureThisArticle = 'Monthly Newsletter';
  featureUntil = 'Overseas personal tax issues';
  socialMedia = '../../../../assets/manage_content/linkedin.png';
  socialMediaTitle = 'test';
  specificDate = 'Monthly Newsletter';
}
