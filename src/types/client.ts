export interface Client {
  name: string;
  logo: string;
  url: string;
  /**
   * Render the logo in its original colours instead of the uniform white treatment.
   * Needed for badge logos whose artwork includes a filled background — inverting
   * those collapses the whole badge into a solid disc.
   */
  keepOriginalColour?: boolean;
}
