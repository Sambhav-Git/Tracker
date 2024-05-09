import React from "react";

const LetterComponent = ({ barcode, partyName, partyAddress }) => {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const LetterDate = new Date().toLocaleDateString("en-US", dateOptions); // Example date

  const addressWithBreaks = partyAddress.split("\n");

  //   const PartyName = "John Doe";
  //   const PartyMailingAddress1 = "123 Main Street";
  //   const PartyMailingAddress2 = "Apt 101";
  //   const PartyMailingCity = "Anytown";
  //   const PartyMailingState = "FL";
  //   const PartyMailingZip = "12345";

  //   const FirstName = "Jane";
  //   const LastName = "Smith";
  //   const PolicyNumber = "ABC123";
  //   const WorkkardNumber = "WK123";
  //   const LossDate = "2022-05-01"; // Example date
  //   const LossType = "Fire";
  //   const PropertyAddress1 = "456 Oak Avenue";
  //   const PropertyAddress2 = "Suite 202";
  //   const PropertyCity = "Anycity";
  //   const PropertyState = "CA";
  //   const PropertyZip = "98765";

  //   const ClaimPayment = "$1000.00"; // Example amount
  //   const Coveragetype = "Property Damage"; // Example coverage type

  //   const CarrierName = "HCPCI";
  //   const ExaminerName = "John Sam";
  //   const UserLicense = "52121453";
  //   const ccName = "John Volta";
  //   const ccAddress1 = "Test Address";
  //   const ccAddress2 = "TestAdd2";
  //   const ccState = "FL";
  //   const ccZip = "32006";
  //   const ccCity = "Miami";
  //   const EnclosedAttachment = "NA";

  return (
    <div>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          {LetterDate}
        </span>
      </p>
      <br />
      <p>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          {partyName}
          <br />
          <div style={{marginTop: "7px"}}>
            {addressWithBreaks.map((line, index) => (
              <p
                style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px", lineHeight: "5px" }}
                key={index}
              >
                {line}
              </p>
            ))}
          </div>
        </span>
        {barcode && <p></p>}
      </p>
      {/* <p>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          {PartyMailingAddress2}
          <br />
          {PartyMailingCity}, {PartyMailingState} {PartyMailingZip}
        </span>
      </p> */}
      <br />
      <br />
      <p style={{ textAlign: "justify" }}></p>
      <p style={{ textAlign: "justify" }}>
        <p style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          Dear {partyName},
        </p>
        <p style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          This is sample letter to verify intelligent mail barcode
        </p>
        <br />
        <p style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          Thanks,
        </p>
      </p>
      {/* <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          RE: Our Insured: {FirstName} {LastName}
          <br />
          Policy: {PolicyNumber}
          <br />
          Claim Number: {WorkkardNumber}
          <br />
          Date of Loss: {LossDate}
          <br />
          Loss Type: {LossType}
          <br />
          Property Location: {PropertyAddress1}
          <br />
          {PropertyAddress2}
          <br />
          {PropertyCity}, {PropertyState} {PropertyZip}
        </span>
      </p>
      <br />
      <p style={{ textAlign: "justify" }}></p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          Dear {PartyName}:
        </span>
      </p>
      <p style={{ textAlign: "justify" }}></p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          We have completed our estimate of the damages and have issued a
          payment as below:
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          {ClaimPayment}
        </span>
      </p>
      <p style={{ textAlign: "justify" }}></p>
      <p style={{ textAlign: "justify" }}>{Coveragetype}</p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          Enclosed is a copy of the estimate, which reflects our valuation of
          the covered damages based on the information provided to date.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          When the check arrives, it may have multiple parties, such as
          lienholders, assignees or others that may be legally entitled to
          policy benefits. If the mortgagee is a payee on the check, please
          understand that this is according to the policy. For the check to be
          properly processed, please obtain proper signatures and endorsement
          for all parties listed on the check. If you do not obtain the proper
          signatures and endorsements, our bank may not be able to complete the
          transaction and will return the claim check for missing endorsements.
          This will delay access to and use of the funds.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          The policy may provide Replacement Cost coverage whereby the amount
          estimated as “recoverable depreciation” may be recovered once repairs
          are completed or the costs are incurred by a legally binding contract.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          To claim recoverable depreciation, please provide the following items
          to verify the cost and completion of repairs:
        </span>
      </p>
      <ul>
        <li>
          <p style={{ textAlign: "justify" }}>
            <span
              style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}
            >
              Final invoice and/or receipts reflecting the total cost of
              repairs.
            </span>
          </p>
        </li>
        <li>
          <p style={{ textAlign: "justify" }}>
            <span
              style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}
            >
              Signed Letter of Completion on the contractor or vendor’s
              letterhead.
            </span>
          </p>
        </li>
        <li>
          <p style={{ textAlign: "justify" }}>
            <span
              style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}
            >
              Photos showing the completed work or copies of cancelled checks.
            </span>
          </p>
        </li>
      </ul>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          <strong>
            Our payment to you does not necessarily constitute full and final
            settlement of this claim.{" "}
          </strong>
          Please notify us of any additional loss or damage to the property and
          ensure that necessary repairs are made to protect the property from
          further damage. Your policy may not cover damages in future claims for
          which repairs are not completed.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          You may forward any additional documentation, including requests to
          claim recoverable depreciation, to the P.O. Box, email or fax number
          provided below. Please include the claim number in all correspondence.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "center" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          HOMEOWNERS CHOICE PROPERTY & CASUALTY INSURANCE COMPANY, INC.
        </span>
      </p>
      <p style={{ textAlign: "center" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          Post Office Box 22967, Tampa, Florida 33622
        </span>
      </p>
      <p style={{ textAlign: "center" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          claims@hcpci.com | Claims Fax: 813-865-0173
        </span>
        <br />
        &nbsp;
      </p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          Unfortunately, we are unable to include payment for excluded_damage as
          the policy specifically excludes damage caused by wear, tear, rot,
          decay, deterioration or maintenance related issues.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          We have quoted the pertinent policy provisions below:
        </span>
      </p>
      <ul>
        <li>
          <span
            style={{
              fontFamily: "Calibri, sans-serif",
              fontSize: "14px",
              color: "#e74c3c",
            }}
          >
            <em>
              <strong>
                Please add policy provisions, exclusions and conditions from
                snippets (Delete this line after inserting snippet)
              </strong>
            </em>
          </span>
        </li>
      </ul>
      <p>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          By stating the above reason for the partial denial of the claim,{" "}
          {CarrierName} does not intend to waive any policy defenses in addition
          to those stated above, but specifically reserves its right to assert
          such policy defenses at any time.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          {CarrierName} does not intend this letter to be a full disclosure of
          all policy coverages, conditions and exclusions, neither is it our
          intent to waive any of the rights and privileges afforded to us under
          the policy in question. {CarrierName} hereby continues to reserve
          those rights and privileges.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          <strong>
            WE ARE CONTINUING TO EVALUATE YOUR CLAIM INVOLVING YOUR INSURED
            PROPERTY AND MAY ISSUE ADDITIONAL PAYMENTS. IF YOU HAVE QUESTIONS,
            CONCERNS OR ADDITIONAL INFORMATION REGARDING YOUR CLAIM, WE
            ENCOURAGE YOU TO CONTACT US.
          </strong>
        </span>
      </p>
      <p>&nbsp;</p>
      <p>
        <span
          style={{
            fontFamily: "Calibri, sans-serif",
            fontSize: "14px",
            color: "inherit",
          }}
        >
          Griston Claim Management, Inc. is a third party administrator of
          claims for {CarrierName} and handles all claims for the carrier.
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          Sincerely,
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          {ExaminerName}
          <br />
          Claim Examiner
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          {PropertyState}-{UserLicense}
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          claims@hcpci.com
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          Cc.: {ccName}
          <br />
          {ccAddress1}
          <br />
          {ccAddress2}
          <br />
          {ccCity}, {ccState} {ccZip}
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "14px" }}>
          Encl.: {EnclosedAttachment}
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "12px" }}>
          <em>
            If this document contains an excerpt from a Homeowners Choice
            Property & Casualty Insurance Company, Inc., policy (“the Policy”),
            it is provided here for informational purposes only. This excerpt is
            not the official version of the policy. The official version of the
            policy is the policy issued to the insured on the policy effective
            date. In the event there is any inconsistency between this document
            and the Policy, the Policy shall serve as the official version.
          </em>
        </span>
      </p>
      <p style={{ textAlign: "justify" }}>&nbsp;</p>
      <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: "Calibri, sans-serif", fontSize: "12px" }}>
          <em>
            Section 817.234(1)(b) of the Florida Statutes provides that: Any
            person who knowingly and with intent to injure, defraud, or deceive
            any insurer files a statement of claim or an application containing
            any false, incomplete, or misleading information is guilty of a
            felony of the third degree.
          </em>
        </span>
      </p> */}
    </div>
  );
};

export default LetterComponent;
