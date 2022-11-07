Feature: Login AGEN46

    Scenario Outline: As a user, I can log into the AGEN46 for the first time

        Given I open the AGEN46
        When I lewati splash screen
        When I login with <username> and <password>
        When I click button masuk
        # When I tap dashboard guide
        # Then I should see a element present


        Examples:
            | username    | password  |
            | BNIAG100381 | Ipybni06! |

